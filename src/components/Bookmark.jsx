import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
  return (
    <div className='px-4 rounded-md mb-4 mx-4 bg-white'>
      <p className='p-4 text-2xl'>{title}</p>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark:PropTypes.array.isRequired
}

export default Bookmark
