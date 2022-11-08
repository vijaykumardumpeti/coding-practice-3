// Creating a BannerCardItem component

const BannerCardItem = props => {
  const {objectDetails, key} = props
  const {headerText, description, className} = objectDetails

  return (
    <li key={key} className={className}>
      <div className="content">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="buttons" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
