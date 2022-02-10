import { Link } from "react-router-dom";
import Data from "./data.json";
const Orders = () => {
    return (
        <section className="orders">
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
                                        <Link to={'/elsaadmarket/orders'} className='nav-link active dash'>
                                            <i className="fad fa-file-invoice-dollar"></i>
                                            <span>الطلبات</span>
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to={'/elsaadmarket/members'} className='nav-link dash'>
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
                    <div className="col-lg-10">
                        <div className="order-container">
                            <div className="card shadow border-0 m-0">
                                <div className="card-header p-4">
                                    <h2 className="mb-0">
                                        <img src={'imgs/animated/cheque.gif'} alt="" />
                                        <span>طلبات اليوم</span>
                                    </h2>
                                </div>
                                <div className="table-responsive">
                                    <table id='example' className="table table-striped" aria-describedby="example_info">
                                        <thead className='text-center'>
                                            <tr>
                                                <th>رقم الطلب</th>
                                                <th>الإسم</th>
                                                <th>العنوان</th>
                                                <th>رقم التلفون</th>
                                                <th>حالة الطلب</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center' id='t_body'>
                                            {Data.Cients_Details.map(client => (
                                                <tr key={client.id}>
                                                    <td>{client.id}</td>
                                                    <td>{client.name}</td>
                                                    <td>{client.address}</td>
                                                    <td>{client.phone}</td>
                                                    <td>
                                                        <div className="status">
                                                            <strong className='wait'>قيد الإنتظار</strong>
                                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        <button type="button" class="show btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                                            <span>إظهار البيانات</span>
                                                            <div class="spinner-grow text-dark" role="status"></div>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">
                                                            <span>
                                                                <img src={'imgs/animated/create-order.gif'} alt="" />
                                                            </span>
                                                            <span>طلب جديد</span>
                                                        </h5>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div className="modal-body-title">
                                                            <h5>بيانات العميل</h5>
                                                        </div>
                                                        <form action='' method='post' className='d-flex flex-wrap '>
                                                            <div className="bb d-flex justify-content-center text-center">
                                                                <div class="mb-1 d-flex border">
                                                                    <label for="recipient-name" class="col-form-label">الإسم:</label>
                                                                    <input type="text" class="form-control input w" value="Omar Abdelatif" id="recipient-name" readOnly />
                                                                </div>
                                                                <div class="mb-1 d-flex border">
                                                                    <label for="recipient-name" class="col-form-label">العنوان:</label>
                                                                    <input type="text" class="form-control input" value="ح/5 - مج/6 - قطعة/1283" id="recipient-name" readOnly />
                                                                </div>
                                                                <div class="mb-1 d-flex border">
                                                                    <label for="recipient-name" class="col-form-label">رقم التلفون:</label>
                                                                    <input type="text" class="form-control input w" value="0123456789" id="recipient-name" readOnly />
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="message-text" class="col-form-label">طلب العميل:</label>
                                                                <textarea class="form-control" id="message-text" rows={5} cols={100} readOnly></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <div className="footer-btns">
                                                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">
                                                                <strong>قبول</strong>
                                                                <i className="far fa-check-circle"></i>
                                                            </button>
                                                            <button type="button" class="btn btn-danger" id='Show'>
                                                                <strong>رفض</strong>
                                                                <i className="far fa-times-hexagon"></i>
                                                            </button>
                                                        </div>
                                                        <div className="reason" id='Reason'>
                                                            <form action="" method=''>
                                                                <input type="text" name="" id="" className='form-control' placeholder='سبب رفض الطلب' />
                                                                <button type="submit" className='btn btn-primary'>إرسال</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Orders;