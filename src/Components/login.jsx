import React from 'react';
import { Link } from 'react-router-dom';
class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-6">
                            <div className="login-container">
                                <div className="login-title">
                                    <h1>
                                        <span>" أسواق</span>
                                        <span>السعد "</span>
                                    </h1>
                                </div>
                                <div className="login-form">
                                    <div className="title">
                                        <h2>تسجيل الدخول</h2>
                                    </div>
                                    <form action='' method='POST'>
                                        <div className="form-group form">
                                            <input type="text" id='username' className="form-control" placeholder="اسم المستخدم" />
                                            <input type="Password" id='password' className='form-control' placeholder='كلمة المرور' />
                                        </div>
                                        <Link to={'dashboard'} className="btn btn-primary submit">تسجيل الدخول</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="login-img"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;