
let Members = localStorage.getItem("Members")


const Login =(ev)=>{
    ev.preventDefault()
    const UserName = document.getElementById("EmailInput").value;
    const Password = document.getElementById("PasswordInput").value;
    let member = {
        username: UserName,
        password: Password
    }

    Members.push(member);
    console.log(Members)

    localStorage.setItem('Members', JSON.stringify(Members) );
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.Submit').addEventListener('click', Login)
})