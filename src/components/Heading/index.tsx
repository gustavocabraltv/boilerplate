import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  leftLine: boolean
  color: 'white' | 'black' | 'secondary'
}

const Heading = ({
  children,
  leftLine = false,
  color = 'black'
}: HeadingProps) => (
  <S.Wrapper leftLine={leftLine} color={color}>
    {children}
  </S.Wrapper>
)

export default Heading
