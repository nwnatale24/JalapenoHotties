
import Select from "react-select";


function RestaurantSelect(props) {
    const BACKGROUND_COLOR = "#28211E";
    const TEXT_COLOR = "white";

    const RestaurantStyles = {
        control: (defaultStyles) => ({
            ...defaultStyles,
            color: TEXT_COLOR,
            backgroundColor: BACKGROUND_COLOR,
            borderRadius: "0.35em 0em 0 0",
            borderColor: "#191211",
            borderWidth: "4px",
            height: "5em",
        }),
        menu: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: BACKGROUND_COLOR,
            color: TEXT_COLOR,
            marginTop: "0",

        }),
        option: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: BACKGROUND_COLOR,
            color: TEXT_COLOR,
        }),
        singleValue: (defaultStyles) => ({
            ...defaultStyles,
            color: TEXT_COLOR,
        }),
        placeHolder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: TEXT_COLOR,
                opacity: 0.75,
            };
        },
        input: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: TEXT_COLOR,
                opacity: 0.75
            };
        },
    };

    return (
        <div>
            <Select
              value={props.value}
              options={props.options}
              placeholder={props.placeholder}
              dropdownPosition={props.dropdownPosition}
              onChange={props.onChange}
              isSearchable={props.isSearchable}
              styles={RestaurantStyles}
            />
        </div>
    )

}

export default RestaurantSelect;