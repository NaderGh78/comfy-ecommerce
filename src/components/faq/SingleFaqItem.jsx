const SingleFaqItem = ({ data: { faqId, faqTitle, faqDesc } }) => {
  return (
    <div className="single-faq-item">
      {/* in order to jump the link to this section */}
      <h5 id={`faqpara${faqId}`}>{faqId}- {faqTitle}</h5>
      <p>{faqDesc}</p>
    </div>
  )
}

export default SingleFaqItem;