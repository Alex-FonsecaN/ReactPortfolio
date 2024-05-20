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
                            <td>R$25,00</td>
                            <td>R$55,00</td>
                            <td>R$100,00</td>
                        </tr>
                        <tr>
                            <td className='first-td'>Envio do projeto</td>
                            <td>R$45,00</td>
                            <td>R$80,00</td>
                            <td>R$155,00</td>
                        </tr>
                        <tr>
                            <td className='first-td'>Publicação em conta cliente</td>
                            <td>R$55,00</td>
                            <td>R$95,00</td>
                            <td>R$185,00</td>
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