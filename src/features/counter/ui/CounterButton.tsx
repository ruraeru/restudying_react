import { useEffect, useState } from "react";
import { useCountActions, useCountState } from "../model/useCounter";
import { StyledButton, StyledText, Wrapper } from "./CounterButton.styles";
import { useCountStore } from "../model/countStore";

const CounterButton = () => {
    const [double, setDouble] = useState(2);


    useEffect(() => useCountStore.subscribe(
        state => state.count,
        count => { setDouble(count * 2) }
    ), []);

    const count = useCountState();
    const { increase, decrease } = useCountActions();
    return (
        <Wrapper>
            <StyledText>{count}</StyledText>
            <StyledText>{double}</StyledText>
            <div>
                <StyledButton onClick={increase}>+1</StyledButton>
                <StyledButton onClick={decrease}>-1</StyledButton>
                <StyledButton>get value</StyledButton>
            </div>
        </Wrapper>
    )
}
export default CounterButton;