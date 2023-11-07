import React from "react";
import store from "../../redux/modules/users/store";
import Header from "../Header";
import { Button, Form as InnerForm, Input, Card } from "antd";
import { setPostComponentAction } from "../../redux/modules/users/reducers/dynamicComponent";
import { createPostAction } from "../../redux/modules/users/reducers/postReducer";

import "./style.css";

const { TextArea } = Input;

let old;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Form = () => {
  const [form] = InnerForm.useForm();

  const onFinish = (values) => {
    const post = { ...values, userId: 1 };
    store.dispatch(() => createPostAction(post));
    store.dispatch(setPostComponentAction());
    console.log(values);
  };
  const onReset = () => {
    old = form.getFieldsValue();
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({ ...old });
  };
  return (
    <div>
      <Header title={"Створити статтю"} />
      <div className="form-create-post__empty">&nbsp;</div>
      <div className="container">
        <Card style={{ width: 700 }}>
          <InnerForm
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{
              maxWidth: 900,
            }}
          >
            <InnerForm.Item
              name="title"
              label="Заголовок"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </InnerForm.Item>
            <InnerForm.Item
              name="body"
              label="Текст статті"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea rows={4} />
            </InnerForm.Item>
            <InnerForm.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Опублікувати
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Відмінити
              </Button>
              <Button type="link" htmlType="button" onClick={onFill}>
                Відновити
              </Button>
            </InnerForm.Item>
          </InnerForm>
        </Card>
      </div>
    </div>
  );
};

export default Form;
