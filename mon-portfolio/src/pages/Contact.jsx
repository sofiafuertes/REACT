function Contact(){
    return(<>
    <h1>Contact</h1>
    <form>
        <input type="text" name="nomComplet" placeholder="Nom Complet" />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <textarea name="message" placeholder="Votre message..."/>
        <br />
        <input type="submit" />
    </form>
    </>)

}

export default Contact