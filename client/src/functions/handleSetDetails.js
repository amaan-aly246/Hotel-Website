export const handleSetDetails = (event , setUserDetails) => {
    setUserDetails((prevDetails) => ({
        ...prevDetails,
        [event.target.id]: event.target.value,
    }))
}