const Name = sessionStorage.getItem('UserName')
const TitleName = querySelector('.UserName')
TitleName.value = Name;


function add() {
    const main = document.querySelector(".main")
    
    const card = document.createElement('div')
    card.classList = 'CoursBox';

    const CoursBox = `
        <img class="CoursImage" src="acls.jpeg">
        <div class="CoursTitle">
            <h3 class="CoursTitle1">קורס ACLS</h3>
            <p class="CoursTitle2">קורס החייאה פידיאטרית מתקדמת</p>
        </div>
        <div class="ProgressBox">
            <div class="TitleBox">סיימת 20%, המשך ללמוד</div>
            <div class="ProgressBar">
            </div>
        </div>
    `;

    card.innerHTML += CoursBox
    main.appendChild(card)
    


}