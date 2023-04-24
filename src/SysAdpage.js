import React from 'react';
import { useEffect, useState } from "react";
const SysAdpage = () => {
    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <p>Welcome to your SysAdpage</p>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
};
export default SysAdpage;