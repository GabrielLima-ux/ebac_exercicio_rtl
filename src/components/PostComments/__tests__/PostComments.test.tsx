import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '../../../components/PostComments'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Deve inserir dois comentários', () => {
        render(<PostComment />)
        
        fireEvent.change(screen.getByTestId('text-comment'), {
            target: {
                value: 'Primeiro comentário',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))

        fireEvent.change(screen.getByTestId('text-comment'), {
            target: {
                value: 'Segundo comentário',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))

        expect(screen.getAllByTestId('list-comment')).toHaveLength(2)
    })
})