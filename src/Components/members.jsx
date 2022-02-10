import { Link } from "react-router-dom";
const Members = () => {
    return (
        <div className="members">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-2">
                        <div className="sidemenu">
                            <div className="sidemenu-header">
                                <h3>
                                    <span>أسواق</span>
                                    <span>السعد</span>
                                </h3>
                            </div>
                            <div className="sidemenu-body">
                                <ul className='navbar-nav user-list'>
                                    <li className='nav-item'>
                                        <Link to={'/elsaadmarket/dashboard'} className='nav-link dash'>
                                            <i className="fad fa-home"></i>
                                            <span>لوحة التحكم</span>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to={'/elsaadmarket/orders'} className='nav-link dash'>
                                            <i className="fad fa-file-invoice-dollar"></i>
                                            <span>الطلبات</span>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to={'/elsaadmarket/members'} className='nav-link active dash'>
                                            <i className="fad fa-user"></i>
                                            <span>الأعضاء</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/elsaadmarket/history'} className="nav-link dash">
                                            <i className="fad fa-history"></i>
                                            <span>الطلبات السابقة</span>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/elsaadmarket' className='nav-link dash'>
                                            <i className="fad fa-sign-out-alt"></i>
                                            <span>تسجيل خروج</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Members;