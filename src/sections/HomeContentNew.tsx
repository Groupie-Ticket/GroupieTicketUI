import React from "react";
import EventsNew from "../components/HomeContentNew/EventsNew";


export default function HomeContentNew() {
    return (
        <div className="max-w-[1280px] px-10 py-20 mx-auto mt-[-40px] flex flex-col gap-10">
            <EventsNew />
        </div>
    );
}