import './Toggle.css'

export const Toggle = ({handleChange,isChecked}) => {
  return (
    <div className='toggle-container'>
      <input type="checkbox"
      id='check'
      className='toggle'
      onChange={handleChange}
      checked={isChecked}
      />
      <label htmlFor="check" >{isChecked?"Dark Mode":"Light Mode"}</label>
    </div>
  )
}

export default Toggle