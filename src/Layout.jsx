import {QrGen} from "./QrGen"
import css from './QRgen.module.css';

const Layout = () => {
    return (
        <div className="Page">
            <div className={css.header}>
                <h1>QRgen</h1>
            </div>
            <div className="QrGen">
                <QrGen></QrGen>
            </div>
        </div>
    )
}

export {Layout};