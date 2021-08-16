import '../styles/Widgets.css'

function Widgets(){
  return(
    <div className="widgets">
    <iframe
    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FCleverProgrammerr%2Fvideos%2F361140252307098%2F&show_text=false&width=560&t=0"
    width="340"
    height="100%"
    style={{border:'none',overflow:"hidden"}}
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen="true"></iframe>
    </div>
  )
}

export default Widgets
