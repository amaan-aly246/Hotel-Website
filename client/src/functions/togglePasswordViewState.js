export const togglePasswordViewState = (event) =>{
    const element = event.target
                  const input = event.target.previousElementSibling
                  input.type = element.classList.contains("fa-eye")
                    ? "text"
                    : "password"

                  element.classList.toggle("fa-eye-slash")
                  element.classList.toggle("fa-eye")
}