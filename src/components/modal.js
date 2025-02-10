import "./modal.css"
export default function modal(props) {
  return (
    <div className="modal_background">
        <div className="modal">
            {props.children}
            <br/>
            < button onClick={props.handleClose}>Clsoe</button>'
        </div>

    </div>
  )
}
