function SingleBrandSlider({ data: { brandImg } }) {
    return (
        <div className="single-brand-slider">
            <div className="brand-slider-single">
                <img src={brandImg} alt="" />
            </div>
        </div>
    )
}

export default SingleBrandSlider;