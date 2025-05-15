"use client";

import React, { useState } from "react";
import { Avatar, Card, Image, Tag } from "antd";
import { FC } from "react";
import {
  DeleteOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { UserGroupIcon } from "../../CustomIconsAntd";
import ModalJam from "../../ModalJamSettings/Delivery";

interface BigCardAntdProps {
  game: string;
  alt: string;
  src: string;
  user: string;
  desc: string;
  date?: string;
  time?: string;
  maxPlayers?: number;
  currentPlayers?: number;
  jamData: any;
  onUpdateJam: (newJamData: any) => void;
}

const BigCardAntd: FC<BigCardAntdProps> = ({
  game,
  alt,
  src,
  user,
  desc,
  date,
  time,
  maxPlayers,
  currentPlayers,
  jamData,
  onUpdateJam,
}: BigCardAntdProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdateJam = (newJamData: any) => {
    onUpdateJam(newJamData); // Llamamos a la función para actualizar los datos
  };

  return (
    <>
      <Card
        className="transition-transform duration-200 hover:scale-105 my-8 mx-12"
        style={{ width: 600 }}
        cover={<Image alt={alt} src={src} preview={false} />}
        actions={[
          <SettingOutlined
            key="settings"
            style={{ fontSize: "20px" }}
            onClick={showModal}
          />,
          <DeleteOutlined key="delete" style={{ fontSize: "20px" }} />,
          <UserGroupIcon key="group" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={user} />}
          title={<span className="text-2xl font-semibold">{game}</span>}
          description={
            <div className="text-base mt-2 space-y-1">
              <div>{desc}</div>
              {date && time && (
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CalendarOutlined />
                  <span>{`${date} a las ${time}`}</span>
                </div>
              )}
              {maxPlayers && currentPlayers && (
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Tag color="blue">{`${currentPlayers}/${maxPlayers} jugadores`}</Tag>
                </div>
              )}
            </div>
          }
        />
      </Card>

      {/* Modal para editar la jam */}
      <ModalJam
        isVisible={isModalVisible}
        onCancel={handleCancel}
        onUpdate={handleUpdateJam}
        currentPlayers={currentPlayers}
        jamData={jamData}
      />
    </>
  );
};

export default BigCardAntd;
