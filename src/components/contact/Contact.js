import { GlobalOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, message, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';
import api from '../../utils/api';

const Contact = () => {
    
const [send, setSend] = useState(false);
const [messageForm, setMessageForm] = useState({firstname: "", surname: "", mail: "", subject: "", message: ""});

const [messageApi, contextHolder] = message.useMessage();

const onInputChange = event => {
    setMessageForm({ ...messageForm, [event.target.name]: event.target.value });
}

const openNotification = (status, message) => {
    messageApi.open({
      type: status ? 'success' : 'error',
      content: message,
    });
};

const onFinish = (values: any) => {
    setSend(true);
    api().post("mesaj", messageForm).then(response => {
        openNotification(response.data.success, response.data.message);
        setSend(false);
    })
};

const onFinishFailed = (errorInfo: any) => {
    openNotification(false, 'Lütfen bütün alanları doldurunuz');
};

    return(
        
        <div className='mainContainer'>
            <h1 className='pageTitle'>İletişim</h1>
            <p>Aşağıdaki formu kullanarak mesaj gönderebilirsiniz.</p>
            <br />
            <Row>
                <Col xs={24} sm={24} md={16}>
                {contextHolder}
                    <Form
                    name="contact_form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 14 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Adınız"
                        name="firstname"
                        rules={[{ required: true, message: 'Adınızı giriniz!' }]}
                    >
                        <Input placeholder='Adınız' name='firstname' value={messageForm.firstname} onChange={onInputChange} />
                    </Form.Item>

                    <Form.Item
                        label="Soyadınız"
                        name="surname"
                        rules={[{ required: true, message: 'Soyadınızı Giriniz!' }]}
                    >
                        <Input placeholder='Soyadınız' name='surname' value={messageForm.surname} onChange={onInputChange} />
                    </Form.Item>
                    
                    <Form.Item
                        label="E-Posta Adresiniz"
                        name="mail"
                        rules={[{ required: true, message: 'E-Posta Adresinizi Giriniz!' }]}
                    >
                        <Input placeholder='E-Posta Adresiniz' name='mail' value={messageForm.mail} onChange={onInputChange} />
                    </Form.Item>
                    
                    <Form.Item
                        label="Konu"
                        name="subject"
                        rules={[{ required: true, message: 'Konuyu Giriniz!' }]}
                    >
                        <Input placeholder='Konu' name='subject' value={messageForm.subject} onChange={onInputChange} />
                    </Form.Item>

                    <Form.Item
                        label="Mesajınız"
                        name="message"
                        rules={[{ required: true, message: 'Mesajınızı Giriniz!' }]}
                    >
                        <TextArea rows={8} placeholder="Mesajınız" name='message' value={messageForm.message} onChange={onInputChange} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" loading={ (send)? true : false } >
                        Gönder
                        </Button>
                    </Form.Item>
                    </Form>
                </Col>
                <Col xs={24} sm={24} md={8}>  
                    <Row>
                        <Col xs={24} className="contactInfo">
                            <h1>E-Posta</h1>
                            <MailOutlined style={ { fontSize:"4em", color:"#f00000"}} />
                            <br /><br />
                            <p>iletisim@optikfare.com.tr</p>
                        </Col>
                    </Row>              
                    <Row>
                        <Col xs={24} className="contactInfo">
                            <h1>Web</h1>
                            <GlobalOutlined style={ { fontSize:"4em", color:"#f00000"}} />
                            <br /><br />
                            <p>www.optikfare.com.tr</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            
        </div>
    )
}

export default Contact;