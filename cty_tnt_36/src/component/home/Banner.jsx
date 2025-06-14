import style from "./Banner.module.css";
const Banner = () => {
  return (
    <>
      <div className={style.Banner}>
        <img
          className={style.logo}
          src="470816159_3184032148404949_3414814083298525093_n.jpg"
          alt="anh logo"
        />
        <div>
          <h1 className={style.TNT36}>Công ty cổ phần xây dựng TNT 36</h1>
          <p className={style.slogan}>một câu sogan nào đó hay ho </p>
        </div>
      </div>
    </>
  );
};
export default Banner;
