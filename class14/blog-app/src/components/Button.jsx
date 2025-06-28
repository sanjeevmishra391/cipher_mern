export default function Button({text, clickFunc, theme, type}) {
  return (
    <button
      type={type}
      className={`${theme.textColor} ${theme.bg} px-5 py-2.5 font-medium rounded-lg text-sm text-center hover:shadow-lg` }
      onClick={clickFunc}
    >
      {text}
    </button>
  )
}