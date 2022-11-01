import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {Game} from './types';

jest.mock('./helpers/updateGameIndex', () => ({
    updateGameIndex: () => 1
}))

jest.mock('./helpers/getNextGame', () => ({
    getNextGame: (): Game => [{name: 'Spain', goals: 0}, {name: 'Brazil', goals: 0}]
}))

jest.mock('./helpers/updateGameScore', () => ({
    updateGameScore: (): Game => [{name: 'Spain', goals: 125}, {name: 'Brazil', goals: 0}]
}))

jest.mock('./helpers/getGamesSortedByTotalScore', () => ({
    getGamesSortedByTotalScore: (): Game[] => [
        [{name: 'Uruguay', goals: 1}, {name: 'Italy', goals: 0}],
        [{name: 'Spain', goals: 0}, {name: 'Brazil', goals: 0}]
    ]
}))


describe('App', () => {
    test('should render App component', () => {
        render(<App/>);
        const linkElement = screen.getByText(/Football World Cup Score Board/i);
        expect(linkElement).toBeInTheDocument();
    });
    
    test('should show the board when clicking on "Start a game" button', async () => {
        render(<App/>)
        const StartGameButton = screen.getByText(/Start a game/i)
        fireEvent.click(StartGameButton)
        
        expect(screen.getByText(/Spain/i)).toBeInTheDocument()
    })
    
    test('should updated the board score when clicking on "Update score" button', async () => {
        render(<App/>)
        const StartGameButton = screen.getByText(/Start a game/i)
        const UpdateScoreButton = screen.getByText(/Update score/i)
        fireEvent.click(StartGameButton)
        fireEvent.click(UpdateScoreButton)
        
        expect(screen.getByText(/125/i)).toBeInTheDocument()
    })
    
    test('should hide the board when clicking on "Finish game" button', async () => {
        render(<App/>)
        const StartGameButton = screen.getByText(/Start a game/i)
        const FinishGameButton = screen.getByText(/Finish game/i)
        
        fireEvent.click(StartGameButton)
        expect(screen.getByText(/Spain/i)).toBeInTheDocument()
        
        fireEvent.click(FinishGameButton)
        expect(screen.queryByText(/Spain/i)).not.toBeInTheDocument()
    })
    
    test('should show the games summary when clicking on "Show games summary" button', async () => {
        render(<App/>)
        const StartGameButton = screen.getByText(/Start a game/i)
        const FinishGameButton = screen.getByText(/Finish game/i)
        const ShowGamesSummaryButton = screen.getByText(/Show games summary/i)
        
        fireEvent.click(StartGameButton)
        fireEvent.click(FinishGameButton)
        fireEvent.click(ShowGamesSummaryButton)
        expect(screen.getByText(/Spain 0/i)).toBeInTheDocument()
    })
})
