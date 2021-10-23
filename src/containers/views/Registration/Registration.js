import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, DatePicker, Checkbox } from "antd";
import avatar from "./avatar.png";
import "antd/dist/antd.css";

const CheckboxGroup = Checkbox.Group;

const data = ["Toshkent", "Andijon", "Xorazm"];
const data2 = [
  { toshkent: ["Yunusobod", "Chilonzor"] },
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

export default function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [time, setTime] = useState(Date.now);
  const [region, setRegion] = useState("");
  const [organization, setOrganization] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [city, setCity] = useState("");
  const [jinsi, setJinsi] = useState("");
  const [avatarImage, setAvatarImage] = useState(avatar);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
  };
  console.log(checkedItems);

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
    console.log(username, password, time);
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
              <div class="grid max-w-5xl grid-cols-3 gap-4 ">
                <div class="col-span-3 lg:col-span-1 md:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Ism"
                      required
                    />
                  </div>
                </div>
                <div class="col-span-3 lg:col-span-1 md:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-surname"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Familiya"
                      required
                    />
                  </div>
                </div>
                <div class="col-span-3 lg:col-span-1 md:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-fathername"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Otasining ismi"
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
                  />
                </div>
              </div>
              <div class="grid max-w-5xl grid-cols-2 gap-4 ">
                <div class="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="contact-form-username"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Username"
                      required
                    />
                  </div>
                </div>
                <div class="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <div class=" relative ">
                    <input
                      type="password"
                      id="contact-form-password"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Parol"
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
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="JSHSHIR raqamini kiriting"
                    required
                  />
                </div>
              </div>
              <div className="grid max-w-5xl mt-3 grid-cols-3 gap-4 ">
                <div className="col-span-3  lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label class="block text-left ">
                    Hududingizni tanlang
                    <select
                      id="region"
                      class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500   "
                      name="region"
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      {data.map((d, index) => (
                        <option key={index} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="col-span-3 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label class="block text-left">
                    Shaharingizni tanlang
                    <select
                      id="region"
                      class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="city"
                      onChange={(e) => setCity(e.target.value)}
                      disabled={region ? false : true}
                    >
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
                  <label class="block text-left ">
                    Jinsingizni tanlang
                    <select
                      id="region"
                      class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="sex"
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
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="example@email.com"
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
                    id="contact-form-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="99-999-88-77"
                    required
                  />
                </div>
                <div className="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label className="block text-left">
                    Ish xona telefonigizni kiriting
                  </label>
                  <input
                    type="number"
                    id="contact-form-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="99-999-88-77"
                    required
                  />
                </div>
              </div>
              <div className="grid max-w-5xl mt-3 grid-cols-2 gap-4 ">
                <div className="col-span-3  lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label class="block text-left ">
                    Muassangizni tanlang
                    <select
                      id="region"
                      class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500   "
                      name="region"
                      onChange={(e) => setOrganization(e.target.value)}
                    >
                      {data3.map((d, index) => (
                        <option key={index} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="col-span-3 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <label class="block text-left">
                    Muassangizni tanlang
                    <select
                      id="region"
                      class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      name="city"
                      onChange={(e) => setOrganizationName(e.target.value)}
                      disabled={organization ? false : true}
                    >
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
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Bo'linmangizni kiriting"
                    required
                  />
                </div>
                <div className="col-span-2 lg:col-span-1 d:col-span-1 tablet:col-span-1 mobile:col-span-1">
                  <input
                    type="text"
                    id="contact-form-position"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Lavoziminigizni kiriting"
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
              <button
                type="submit"
                className="w-full mt-4 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
              >
                <span className="w-full">Ro'yxatdan o'tish</span>
              </button>
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
