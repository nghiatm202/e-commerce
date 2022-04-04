const carouselInnerFirst = document.querySelector('.carousel-inner-1')
const quantityInput = document.querySelector('.quantity-input')
const decreaseBtn = document.querySelector('.decrease')
const increaseBtn = document.querySelector('.increase')
const MainImg = document.getElementById('MainImg')
const smallImg = document.getElementsByClassName('small-img')
const categoryMenu = document.getElementById('category-menu')

// Category Menu
const categoryList = [
  'Bách Hóa',
  'Nhà Cửa',
  'Điện Tử',
  'Thiết Bị Số',
  'Điện Thoại',
  'Thời Trang Nữ',
  'Thời Trang Nam',
  'Voucher',
  'Xe Cộ',
  'Sách',
  'Thể Thao',
  'Mẹ & Bé',
  'Túi Nam',
  'Giày Nam',
  'Giày Nữ',
  'Phụ Kiện',
  'Balo & Vali',
  'Đồng Hồ',
  'Quốc Tế',
  'Thịt, Rau Củ',
]

categoryList.forEach((item) => {
  if (categoryMenu) {
    categoryMenu.innerHTML += `<a href="#">${item}</a>`
  }
})

// Carousel Banners
const carouselItems = [
  {
    src: './images/1.png',
    alt: 'banner',
  },
  {
    src: './images/2.png',
    alt: 'banner',
  },
  {
    src: './images/1.png',
    alt: 'banner',
  },
  {
    src: './images/2.png',
    alt: 'banner',
  },
  {
    src: './images/1.png',
    alt: 'banner',
  },
  {
    src: './images/2.png',
    alt: 'banner',
  },
  {
    src: './images/1.png',
    alt: 'banner',
  },
  {
    src: './images/2.png',
    alt: 'banner',
  },
]

carouselItems.forEach((item) => {
  if (carouselInnerFirst) {
    carouselInnerFirst.innerHTML += `<div class="carousel-item">
          <img src="${item.src}" alt="${item.alt}" />
        </div>`
  }
})

// Increase, Decrease Button
if (increaseBtn) {
  increaseBtn.addEventListener('click', () => {
    quantityInput.value++
  })
}

if (decreaseBtn) {
  decreaseBtn.addEventListener('click', () => {
    if (quantityInput.value <= 1) {
      quantityInput.value = 1
    } else {
      quantityInput.value--
    }
  })
}

// Small Image Group
for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener('click', () => {
    MainImg.src = smallImg[i].src
  })
}

// Slick
$('#category-menu').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 8,
  arrows: true,
})

$('.carousel-inner-1').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  fade: true,
  dots: true,
})

$('.trending-products-list').slick({
  autoplaySpeed: 2000,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 5,
})
