import { tokenStore } from "../api/baseConfig"

const Welcome = () => {
    const token = tokenStore.get();
    const tokenAbbr = `${token?.slice(0, 9)}...`

    const content = (
        <section className="welcome">
            <p>Token: {tokenAbbr}</p>
            awaawawawwawawawawawawa
        </section>
    )

    return content
}
export default Welcome