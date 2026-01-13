import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '../../components/PostComments'


describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />)
    })

    test('Deve inserir dois comentários', () => {
        render(<PostComment />)
        fireEvent.submit(screen.getByTestId('submit-comment'))
    })
})