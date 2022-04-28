import { authService } from "fbase";
import { dbService } from "fbase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "@firebase/auth";

export default ({ userObj, refreshUser }) => {
    const navigate = useNavigate();
    const [newDisplayName, setDisplayName] = useState(userObj.displayName)
    const onLogOutClick = () => {
        authService.signOut();
        navigate("/");
    }
    const getMyNweets = async () => {
        const q = query(
            collection(dbService, "nweets"),
            where("creatorId", "==", `${userObj.uid}`)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(((doc) => {
            // console.log(doc.id, "=>", doc.data())
        })
        );
    };
    useEffect(() => {
        getMyNweets();
    })
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setDisplayName(value)
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName) {
            await updateProfile(userObj, { displayName: newDisplayName });
            refreshUser();
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    placeholder="Display name"
                    value={newDisplayName}
                />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}