import { Fragment } from 'react'

type ButtonProps = JSX.IntrinsicElements['button']
type AnchorProps = JSX.IntrinsicElements['a']

const isPropsForAnchorElement = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  return 'href' in props
}

const PolymorphicButton = (props: ButtonProps | AnchorProps) => {
  return (
    <Fragment>
      {isPropsForAnchorElement(props) ? (
        <a {...props} />
      ) : (
        <button className="font-medium uppercase text-white" {...props} />
      )}
    </Fragment>
  )
}

export default PolymorphicButton
