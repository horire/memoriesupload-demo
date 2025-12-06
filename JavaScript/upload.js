const scrollDown = document.querySelector('#scrollDown');
const arrow = document.querySelector('#arrow')
const getscrollPercent = () => {
    const scrolled = window.scrollY;

    const pageHight = document.documentElement.scrollHeight
    const clientHight = document.documentElement.clientHeight
    const canScroll = scrolled / (pageHight - clientHight) * 100;
    const top = document.querySelector('#topOrscroll')
    console.log(`${canScroll}%`)
    if (canScroll > 15) {
        arrow.classList.add('arrow-up')

        top.textContent = 'Top';
        top.style.color = '#333';


    } else {
        arrow.classList.remove('arrow-up')
        top.textContent = 'Scroll';
        top.style.color = '#fff';
    }
}

window.addEventListener('scroll', getscrollPercent);



// 画像ダウンロード機能
const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d"); // 描画用の2Dコンテキストを取得
const textInput7 = document.querySelector("#input7");
const imageUpload = document.querySelector('#imageUpload');
let userImage = null;
const img = new Image();

const drawCanvas = () => {
    ctx.drawImage(img, 0, 0, 841, 470);
}


imageUpload.addEventListener('change', (e) => {

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {

        img.src = reader.result;
        img.onload = () => {
            drawCanvas(); // ← 画像ロード完了後に描画
        };


    };
    reader.readAsDataURL(file);
});

// ダウンロードボタン
const saveButton = document.querySelector('#saveButton');
const saveSystem = () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'myCanvasImage.png';
    link.click();
}
saveButton.addEventListener('click', saveSystem);


// 文字数カウント

const count = document.querySelector('#count');
const textCount = () => {

    count.textContent = textInput7.value.length;
    if (textInput7.value.length > 40) {
        count.classList.add('alert');
    } else {
        count.classList.remove('alert');
    }
};

textInput7.addEventListener('keyup', textCount);