<template> 
    <div class="products">
        <div class="products__product" v-for="product in products" :key="product.index">
            <div class="products__title">{{product.title}}</div>
            <div class="products__button">Buy now</div>
            <div class="products__image"><img :src="product.image" /></div>
        </div>
    </div> 
</template>

<script> 
export default {
    name: 'ProductListComponent', 
    data() {
        return{
            products: [
                {title: 'McCain Smiles', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-i2C5ZdNNc6I442iWmrAFMQsjQQDPxU_Fq3NIraJ-5FP-Sc7'},
                {title: '2x2 speed cube', image: 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
                {title: 'Soundless headphones', image: 'http://demo.ajax-cart.com/photos/product/4/176/4.jpg'},
                {title: 'Electric shaver', image: 'https://images.philips.com/is/image/PhilipsConsumer/S5400_06-IMS-en_GB?wid=494&hei=435&$pnglarge$'},
                {title: 'McCain Smiles', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-i2C5ZdNNc6I442iWmrAFMQsjQQDPxU_Fq3NIraJ-5FP-Sc7'},
                {title: '2x2 speed cube', image: 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
                {title: 'Soundless headphones', image: 'http://demo.ajax-cart.com/photos/product/4/176/4.jpg'},
                {title: 'Electric shaver', image: 'https://images.philips.com/is/image/PhilipsConsumer/S5400_06-IMS-en_GB?wid=494&hei=435&$pnglarge$'},
                {title: 'McCain Smiles', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-i2C5ZdNNc6I442iWmrAFMQsjQQDPxU_Fq3NIraJ-5FP-Sc7'},
                {title: '2x2 speed cube', image: 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
                {title: 'Soundless headphones', image: 'http://demo.ajax-cart.com/photos/product/4/176/4.jpg'},
                {title: 'Electric shaver', image: 'https://images.philips.com/is/image/PhilipsConsumer/S5400_06-IMS-en_GB?wid=494&hei=435&$pnglarge$'}
                
            ]
        }
	}
}
</script>

<style lang="scss">
.products {
	display: grid;
	grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
	grid-gap: 12px;
	width: 100%;
	background: #eee;
	&__product {
		min-height: 300px;
		position: relative;
		background: white;
		cursor: pointer;
		transition: all .12s;
		overflow: hidden;
		&:hover{
			.products__title{
				top: 0;
            }
			.products__button {
				opacity: 1;
				transition: bottom .48s cubic-bezier(.38,1.47,.8,1.26) .42s;
				bottom: 14px;
            }
        }
    }
	&__title{
		position: absolute;
		font-weight: 900;
		text-align: center;
		width: 100%;
		height: 100%;
		top: -100%;
		padding: 7px;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		background: rgba(0, 0, 0, .5);
		z-index: 2;
		transition: all .48s ;
		transition-timing-function: cubic-bezier(0.38, 1, 0.8, 1);
		background: linear-gradient(to right,#b031af99, #fe404099);
    }
	&__button {
		z-index: 3;
		opacity: 0;
		position: absolute;
		text-align: center;
		margin: 0 auto;
		bottom: -40px;
		width: 50%;
		padding: 5px 20px;
		left: 0;
		right: 0;
		border: 2px solid white;
		color: white;
		font-weight: 900;
		cursor: pointer;
		transition: all .48s;
		transition-delay: 0;
		transition-timing-function: cubic-bezier(.38,1.67,.8,1.21);
		&:hover {
			background: white;
			color: black;
        }
    }
	&__image{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center; 
		img{
             max-width: 100%;
        }
    }
    @media screen and (max-width: 800px) {
        .products {
            grid-template: 1fr 1fr 1fr/ 1fr 1fr;
        }
    }
    @media screen and (max-width: 600px) {
        .products {
            grid-template: 1fr 1fr 1fr 1fr/ 1fr;
        }
    }
}
</style>