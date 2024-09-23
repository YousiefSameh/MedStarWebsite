interface Props {
  title: string;
  description: string;
}

const Title = (props: Props) => {
  return (
    <div className="text-center">
      <h2 className="text-[22px] md:text-[34px] max-w-[600px] mx-auto">{props.title}</h2>
      <img src="img/section-img.png" className="my-5 mx-auto" alt="section-img" />
      <p className="text-[16px] max-w-[425px] mx-auto">{props.description}</p>
    </div>
  )
}

export default Title