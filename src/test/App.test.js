import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from "@testing-library/user-event";
import testData from '../../json-server/db.json'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer( // declare which API requests to mock
    rest.get('http://localhost:3001/artists', (req, res, ctx) => {
      return res(ctx.json(testData.artists))
    }),
    rest.get('http://localhost:3001/songs', (req, res, ctx) => {
      return res(ctx.json(testData.songs))
    }),
)

beforeAll(() => server.listen()) // establish API mocking before all tests

afterEach(() => server.resetHandlers()) // reset any request handlers that are declared as a part of the tests

afterAll(() => server.close()) // clean up once the tests are done

test('renders application title', () => {
  render(<App />)
  const element = screen.getByText(/Rockstars IT!/i)
  expect(element).toBeInTheDocument()
});

test('renders application menu', () => {
  render(<App />)
  const element = screen.getByText(/Menu/i)
  expect(element).toBeInTheDocument()
});

test('filters artists with result', async () => {
  render(<App/>);
  const inputElement = screen.getByPlaceholderText('Search artists! 👨‍🎤')
  expect(inputElement).toBeInTheDocument()
  userEvent.type(inputElement, 'fleet')

  const artistResult = await screen.findByText('Fleetwood Mac')
  expect(artistResult).toBeInTheDocument()
});

test('filters artists without result', async () => {
  render(<App/>);
  const inputElement = screen.getByPlaceholderText('Search artists! 👨‍🎤')
  expect(inputElement).toBeInTheDocument()
  userEvent.type(inputElement, 'No results input')

  const artistResult = await screen.findByText('No results...')
  expect(artistResult).toBeInTheDocument()
});

test('filters songs with result', async () => {
  render(<App/>);
  const menuItem = screen.getByText('Songs')
  fireEvent.click(menuItem)

  const inputElement = screen.getByPlaceholderText('Search songs! 🎵')
  expect(inputElement).toBeInTheDocument()
  userEvent.type(inputElement, 'Cheer')

  const songResult = await screen.findByText('Cheerleader (Felix Jaehn Remix)')
  expect(songResult).toBeInTheDocument()
});

test('filters songs without result', async () => {
  render(<App/>);
  const menuItem = screen.getByText('Songs')
  fireEvent.click(menuItem)

  const inputElement = screen.getByPlaceholderText('Search songs! 🎵')
  expect(inputElement).toBeInTheDocument()
  userEvent.type(inputElement, 'No results input')

  const songResult = await screen.findByText('No results...')
  expect(songResult).toBeInTheDocument()
});

test('about', async () => {
  const alertMock = jest.spyOn(window,'alert').mockImplementation();

  render(<App/>);
  const menuItem = screen.getByText('About')
  fireEvent.click(menuItem)

  expect(alertMock).toBeCalled()
});
