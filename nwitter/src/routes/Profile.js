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
        if (userObj.displayName !== newDisplayName) {
            await updateProfile(userObj, { displayName: newDisplayName });
            refreshUser();
        }
    }
    return (
        <div
            style={{
                maxWidth: 890,
                width: "100%",
                margin: "0 auto",
                marginTop: 80,
                display: "flex",
                justifyContent: "center",
            }}>
            <div className="container">
                <form onSubmit={onSubmit} className="profileForm">
                    <input
                        onChange={onChange}
                        type="text"
                        placeholder="Display name"
                        value={newDisplayName}
                        className="formInput"
                    />
                    <input
                        type="submit"
                        value="Update Profile"
                        className="formBtn"
                        style={{
                            marginTop: 10,
                        }}
                    />
                </form>
                <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                    Log Out
                </span>
            </div>
        </div>
    )
}