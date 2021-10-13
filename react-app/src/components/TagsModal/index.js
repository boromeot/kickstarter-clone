import './Tags.css'

function TagsModal({tags, onClose}){


  return(
    <div class="tags-container">
      <div class="tags-header-inner">
        <h2>Categories</h2>
        <button onClick={onClose}> X </button>
      </div>
      <div class="tags-list">
        {tags.map(tag =>
          <a class="tags-item" href={`/discover?title=${tag.title}`}>{tag?.title}</a>
        )}
      </div>
    </div>
  )
}

export default TagsModal
