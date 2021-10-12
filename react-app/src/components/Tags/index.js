function Tags({tags}){
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  console.log(tags)
  return(
    <ul>
      {tags.map(tag => {
        return <li>{tag.title}</li>
      })}
    </ul>
  )
}

export default Tags
