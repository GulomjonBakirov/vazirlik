import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, DatePicker, Checkbox, message } from "antd";
import avatar from "./avatar.png";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";

import { register, clearErrors } from "../../../actions/userActions";

const CheckboxGroup = Checkbox.Group;

const data = ["Toshkent", "Andijon", "Xorazm"];
const data2 = [
  { Toshkent: ["Yunusobod", "Chilonzor"] },
  { Andijon: ["Qorasuv", "Dexqonobod"] },
  { Xorazm: ["Nukus", "Bekobod"] },
];
const data3 = ["Vazirliklar", "Qomitalar", "Inspektsiyalar"];
const data4 = [
  { Vazirliklar: ["O'zb Transtport Vazirligi", "FVV Vazirligi"] },
  { Qomitalar: ["O'zb Transtport qomitalar", "Favqulotda qomitalar"] },
  {
    Inspektsiyalar: [
      "O'zb Transtport Inspektsiyalar",
      "Favqulotda Inspektsiyalar",
    ],
  },
];
const plainOptions = [
  "Davlat xaridlarini tashkil etish va amalga oshirish tartibi",
  "Budjet tashkilotlarida budjet hisobi va hisoboti",
  "G‘aznachilik boshqarmasi va g‘aznachilik bo‘linmalari boshliqlari",
];

export default function Registration({ history }) {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [fathName, setFathName] = useState("");
  const [time, setTime] = useState(Date.now);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [jshshir, setJshshir] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [jinsi, setJinsi] = useState("erkak");
  const [email, setEmail] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [section, setSection] = useState("");
  const [position, setPosition] = useState("");
  const [avatarImage, setAvatarImage] = useState(avatar);
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
  };

  const { loading, login, error, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (login) {
      history.push("/login");
    }
    if (error) {
      console.log(error);
      message.error("Submit failed!");
      dispatch(clearErrors());
    }
  }, [history, login, error, dispatch]);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      Surname: surName,
      Fathname: fathName,
      dateBirth: time,
      Login: userName,
      Parol: password,
      jshshir: jshshir,
      Hudud: region,
      Tuman: city,
      Sex: jinsi,
      email: email,
      wkphone: `998${phone}`,
      mlphone: `998${mobilePhone}`,
      Muassasa: organization,
      Muassasa2: organizationName,
      Bol: section,
      Lavoz: position,
      Course: checkedList,
      // file: avatarImage,
    };
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("Surname", surName);
    // formData.append("Fathname", fathName);
    // formData.append("dateBirth", time);
    // formData.append("Login", userName);
    // formData.append("jshshir", jshshir);
    // formData.append("Hudud", region);
    // formData.append("Tuman", city);
    // formData.append("Sex", jinsi);
    // formData.append("email", email);
    // formData.append("wkphone", `998${phone}`);
    // formData.append("mlphone", `998${mobilePhone}`);
    // formData.append("Muassasa", organization);
    // formData.append("Muassasa2", organizationName);
    // formData.append("Bol", section);
    // formData.append("Lavoz", position);
    // formData.append("Course", checkedList);
    // formData.append("file", avatarImage);
    console.log(formData);
    dispatch(register(formData));
    message.success("Submit success!");
  };
  return (
    <div>
      <div className="flex flex-wrap w-full items-center mt-9">
        <div className="w-1/2  md:hidden lg:block">
          <img
            className="hidden shadow-2xl  object-cover w-full h-screen md:block"
            src="/assets/images/9.jpg"
            alt="bg"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col justify-center pr-1 pl-1  my-auto lg:px-10 lg:pr-20 lg:pl-20 md:justify-start md:pt-0 md:px-24 md:pr-5 md:pl-5">
            <p className="text-3xl text-center">Welcome.</p>

            <form
              className="flex flex-col pt-1 md:pt-8"
              onSubmit={submitHandler}
            >
              <div className="grid max-w-5xl grid-cols-3 gap-4 ">
                <div className="col-span-3 lg:col-span-1 md:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Ism"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>
                </div>
                <div className="col-span-3 lg:col-span-1 md:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-surname"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Familiya"
                      onChange={(e) => setSurName(e.target.value)}
                      value={surName}
                      required
                    />
                  </div>
                </div>
                <div className="col-span-3 lg:col-span-1 md:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-fathername"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Otasining ismi"
                      onChange={(e) => setFathName(e.target.value)}
                      value={fathName}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-4 justify-center">
                <Form.Item name="datePicker" label="Tug'ilgan Sanasi" required>
                  <DatePicker
                    onChange={(e) => setTime(e.format("YYYY-MM-DD"))}
                    value={time}
                  />
                </Form.Item>
              </div>
              <div className="flex flex-row my-3 justify-center items-center ">
                <div>
                  <figure className="avatar m-0 mr-3 ">
                    <img
                      src={avatarImage}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      alt="Avatar Preview"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                    accept="images/*"
                    onChange={imageHandler}
                    required
                  />
                </div>
              </div>
              <div className="grid max-w-5xl grid-cols-2 gap-4 ">
                <div className="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-username"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Username"
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                      required
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div className=" relative ">
                    <input
                      type="password"
                      id="contact-form-password"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Parol"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-form-jshshir"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="JSHSHIR raqamini kiriting"
                    onChange={(e) => setJshshir(e.target.value)}
                    value={jshshir}
                    required
                  />
                </div>
              </div>
              <div className="grid max-w-5xl mt-3 grid-cols-3 gap-4 ">
                <div className="col-span-3  lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label className="block text-left ">
                    Hududingizni tanlang
                    <select
                      id="region"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500   "
                      name="region"
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <option>Tanlang</option>

                      {data.map((d, index) => (
                        <option key={index} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="col-span-3 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label className="block text-left">
                    Shaharingizni tanlang
                    <select
                      id="city"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="city"
                      onChange={(e) => setCity(e.target.value)}
                      disabled={region ? false : true}
                    >
                      <option>Tanlang</option>
                      {data2.map((d) => {
                        return d[`${region}`]
                          ? d[`${region}`].map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))
                          : " ";
                      })}
                    </select>
                  </label>
                </div>
                <div className="col-span-3 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label className="block text-left ">
                    Jinsingizni tanlang
                    <select
                      id="sex"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="sex"
                      onChange={(e) => setJinsi(e.target.value)}
                    >
                      <option value="erkak">Erkak</option>
                      <option value="ayol">Ayol</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="relative">
                  <input
                    type="email"
                    id="contact-form-email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="example@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
              </div>
              <div className="grid max-w-5xl mt-3 grid-cols-2 gap-4 ">
                <div className="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label className="block text-left">
                    Mobile telefonigizni kiriting
                  </label>
                  <input
                    type="number"
                    id="contact-form-mobile-number"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="99-999-88-77"
                    onChange={(e) => setMobilePhone(e.target.value)}
                    value={mobilePhone}
                    required
                  />
                </div>
                <div className="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label className="block text-left">
                    Ish xona telefonigizni kiriting
                  </label>
                  <input
                    type="number"
                    id="contact-form-phone-number"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="99-999-88-77"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                  />
                </div>
              </div>
              <div className="grid max-w-5xl mt-3 grid-cols-2 gap-4 ">
                <div className="col-span-3  lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label className="block text-left ">
                    Muassangizni tanlang
                    <select
                      id="organization"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500   "
                      name="organization"
                      onChange={(e) => setOrganization(e.target.value)}
                    >
                      <option>Tanlang</option>

                      {data3.map((d, index) => (
                        <option key={index} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="col-span-3 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label className="block text-left">
                    Muassangizni tanlang
                    <select
                      id="organizationName"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="organizationName"
                      onChange={(e) => setOrganizationName(e.target.value)}
                      disabled={organization ? false : true}
                    >
                      <option>Tanlang</option>

                      {data4.map((d) => {
                        return d[`${organization}`]
                          ? d[`${organization}`].map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))
                          : " ";
                      })}
                    </select>
                  </label>
                </div>
              </div>
              <div className="grid max-w-5xl mt-3 grid-cols-2 gap-4 ">
                <div className="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <input
                    type="text"
                    id="contact-form-bolinma"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Bo'linmangizni kiriting"
                    onChange={(e) => setSection(e.target.value)}
                    value={section}
                    required
                  />
                </div>
                <div className="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <input
                    type="text"
                    id="contact-form-position"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Lavoziminigizni kiriting"
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    required
                  />
                </div>
              </div>
              <div className="">
                <Form.Item
                  name="courses"
                  label="Kurslaringiz"
                  valuePropName="checked"
                  style={{ textAlign: "left" }}
                  rules={[
                    {
                      type: "array",
                    },
                  ]}
                >
                  <CheckboxGroup
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChange}
                  />
                </Form.Item>
              </div>
              {loading ? (
                <div class="bg-black flex justify-center px-4 py-2 items-center text-indigo-50 font-semibold p-4 disabled cursor-not-allowed">
                  <svg
                    class="animate-spin h-5 w-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Loading...
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                >
                  <span className="w-full">Ro'xatdan o'tish</span>
                </button>
              )}
            </form>
            <div className="pt-12 pb-12 text-center">
              <p>
                Agar akountingiz bo'lsa?
                <Link to="/login" className="font-semibold underline ml-1">
                  Kirish
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
