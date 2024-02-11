"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import Card from "@/components/Card";
import Icon from "@/components/Icons";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Text from "@/components/Text";
import { CONSTANTS } from "@/constants";
import useDisclosure from "@/hooks/useDisclosure";
import { useWeather } from "@/modules/weather/hooks";
import { useTasksStore } from "@/stores/tasks";

export default function Dashboard() {
  const { tasks, selectedTask, deleteTask } = useTasksStore();
  const [keyword, setKeyword] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure({ open: false });
  const [getLocation, setGeoLocation] = useState({
    lat: 0,
    lon: 0,
  });

  const listTask = useMemo(() => {
    if (!keyword) return tasks;
    return tasks.filter((task) => {
      if (
        task.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) ||
        task.description
          .toLocaleLowerCase()
          .includes(keyword.toLocaleLowerCase())
      )
        return task;
    });
  }, [tasks, keyword]);

  const { data, isLoading } = useWeather({
    lat: getLocation.lat || CONSTANTS.latitude,
    lon: getLocation.lon || CONSTANTS.longtitude,
    appid: process.env.API_KEY_WEATHER || "",
    units: "metric",
  });

  const handleDeleteTask = () => {
    deleteTask(selectedTask?.id || 0);
    onClose();
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setGeoLocation({
          lat: latitude,
          lon: longitude,
        });
      });
    }
  }, []);

  return (
    <div className="relative h-screen flex flex-col gap-5 p-4">
      <Modal
        isVisible={isOpen}
        title="Delete Confirmation"
        description="Are you sure want to delete this task?"
        caption={selectedTask?.title}
        textButtonPrimary="Delete"
        textButtonSecondary="Cancel"
        onClose={onClose}
        onAction={handleDeleteTask}
      />
      <div className="flex bg-gradient-blue justify-between p-8 rounded-2xl max-md:flex-col max-md:gap-6 max-md:p-4">
        <Text variant="heading-2" className="text-white">
          Hello, Welcome to Waizly Notes
        </Text>
        {isLoading ? (
          <div className="animatepulse flex flex-col gap-2 items-end">
            <div className="h-5 w-56 bg-slate-300 rounded-xl" />
            <div className="h-4 w-28 bg-slate-300 rounded-xl" />
          </div>
        ) : (
          <div className="flex flex-col items-end max-md:items-start gap-1">
            <div className="flex gap-2">
              <Image
                src={`${CONSTANTS.imgWeather}/${data?.weather[0]?.icon || ""}@2x.png`}
                alt="Icon Clouds"
                width={32}
                height={32}
              />
              <Text variant="heading-2" className="text-white">
                {data?.name}, {Math.round(data?.main.temp || 0)}° C
              </Text>
            </div>
            <Text variant="xsmall" className="text-white capitalize">
              {data?.weather?.[0].description}
            </Text>
          </div>
        )}
      </div>

      <Input
        placeholder="Search task..."
        value={keyword}
        className="rounded-xl px-4"
        onChange={(e) => setKeyword(e.currentTarget.value)}
      />

      <div className="grid grid-cols-2 flex-wrap gap-5 rounded-lg p-5 pt-0 max-h-[85%] overflow-y-auto max-md:grid-cols-1 max-md:px-3">
        {listTask.map((task, index) => {
          return <Card {...task} key={index} onDelete={onOpen} />;
        })}
      </div>

      <Link
        href="/add"
        className="absolute bottom-28 max-md:bottom-14 right-5 cursor-pointer hover:bg-ultramarine-shadow bg-ultramarine-shadow/70 rounded-full p-3"
      >
        <Icon name="plus" color="#fff" width={24} height={24} />
      </Link>
    </div>
  );
}
