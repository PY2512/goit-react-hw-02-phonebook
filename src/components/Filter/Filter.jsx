import React from "react";
import PropTypes from "prop-types";
import style from "./filter.module.css"

const Filter = ({value, onChange}) => (
    <label className={style.label}>
        Find contacts by name
        <input
        type="text"
        value={value}
        onChange={onChange}
        className={style.input}
        ></input>
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;