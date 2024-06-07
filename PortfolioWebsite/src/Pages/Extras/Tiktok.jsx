import './Tiktok.scss';

function TikTok () {
    return (
        <div id='tiktok-main'>
                <div id='tiktok-contact'><a href='https://www.tiktok.com/@xandinhofiltros'>Orçamento<i className="fa-solid fa-paper-plane"></i></a></div>
                <table id='tiktok-table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th><span>Filtros Pré-Prontos</span></th>
                            <th><span>Filtros Simples</span></th>
                            <th><span>Filtros Complexos</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='first-td'>Publicado em minha conta</td>
                            <td>R$30,00</td>
                            <td>R$60,00</td>
                            <td>R$105,00</td>
                        </tr>
                        <tr>
                            <td className='first-td'>Envio do projeto</td>
                            <td>R$50,00</td>
                            <td>R$85,00</td>
                            <td>R$160,00</td>
                        </tr>
                        <tr>
                            <td className='first-td'>Publicação em conta cliente</td>
                            <td>R$60,00</td>
                            <td>R$100,00</td>
                            <td>R$190,00</td>
                        </tr>
                    </tbody>
                </table>
                <div id='tiktok-footer'>
                    <a href='https://www.tiktok.com/@xandinhofiltros'>https://www.tiktok.com/@xandinhofiltros</a>
                </div>
            </div>
    )
}

export default TikTok;