let data = [
    {photo:'./img/photo1.png',name:'Bill Mahoney',position:'PRODUCT OWNER'},
    {photo:'./img/photo2.png',name:'Saba Cabrera',position:'ART DIRECTOR'},
    {photo:'./img/photo3.png',name:'Shae Le',position:'TECH LEAD'},
    {photo:'./img/photo4.png',name:'Skylah Lu',position:'UX DESIGNER'},
    {photo:'./img/photo5.png',name:'Griff Richards',position:'DEVELOPER'},
    {photo:'./img/photo6.png',name:'Stan John',position:'DEVELOPER'},
]

// 模拟ajax获取数据
let main = document.querySelector('main');
for (let item of data) {   
    let member = document.createElement('div');
    member.className = 'member'

    let img = document.createElement('img');
    img.src = item.photo;

    let name = document.createElement('div');
    name.className = 'name'
    name.append(`${item.name}`)

    let position = document.createElement('div')
    position.className = 'position'
    position.append(`${item.position}`)


    member.append(img,position,name);
    main.append(member)
}

console.log(main);
