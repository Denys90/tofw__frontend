import Loader from '../Loader/Loader';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import svg from 'assets/images/icons.svg';
import { globalLoadingSelector } from '../../root/selectors';
import { patchWatersThunk } from '../../store/water/thunk';

import {
  BtnSave,
  AddParagraph,
  AddTime,
  AddWater,
  FooterModal,
  Input,
  Water,
  Label,
  ButtonMl,
  Icon,
  Title,
  Subtitle,
  BoxAddModal,
  ErrorMessage,
  StyledSelect,
} from './AddWaterModal.styled';

export const EditWaterModal = ({
  onClose,
  waterId,
  initialAmount,
  initialTime,
}) => {
  const [amount, setAmount] = useState(initialAmount || 0);
  const [time, setTime] = useState(initialTime || '');

  const dispatch = useDispatch();
  const { isLoading } = useSelector(globalLoadingSelector);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAmountChange = (e) => {
    let newValue = e.target.value;
    if (newValue > 5000) {
      setErrorMessage('The value cannot exceed 5000ml');
      return;
    } else {
      setErrorMessage('');
    }

    if (newValue.startsWith('0') && newValue.length > 1) {
      newValue = parseFloat(newValue.substring(1));
    }
    setAmount(newValue.toString());
  };

  const handleSubmit = () => {
    const waterData = {
      waterVolume: amount,
      date: time,
    };
    dispatch(patchWatersThunk(waterId, waterData)).then((data) => {
      if (!data.error) {
        onClose();
      }
    });
  };

  const minusAmount = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 50, 0));
  };

  const plusAmount = () => {
    const newAmount = amount + 50;
    const maxAmount = 5000;
    setAmount(newAmount <= maxAmount ? newAmount : maxAmount);
  };

  return (
    <>
      <BoxAddModal onClose={onClose}>
        <AddWater>
          <Title>Edit the entered amount of water</Title>

          <Subtitle>Correct entered date:</Subtitle>

          <AddParagraph>Amount of water:</AddParagraph>
          <div>
            <ButtonMl onClick={minusAmount}>
              <Icon>
                <use href={`${svg}#icon-minus`}></use>
              </Icon>
            </ButtonMl>
            <Label>
              <Water>{amount} ml</Water>
            </Label>
            <ButtonMl onClick={plusAmount}>
              <Icon>
                <use href={`${svg}#icon-plus`}></use>
              </Icon>
            </ButtonMl>
          </div>
        </AddWater>
        <AddTime>
          <AddParagraph>Recording time:</AddParagraph>
          <StyledSelect
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ width: '100%' }}
          >
            <option key="current-time" value={time}>
              {time}
            </option>
          </StyledSelect>
        </AddTime>
        <div>
          <h3>Enter the value of the water used:</h3>
          <Input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            onBlur={() =>
              setAmount((prevAmount) => prevAmount || initialAmount || 0)
            }
            max={5000}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
        <FooterModal>
          <span>{amount}ml</span>
          <BtnSave onClick={handleSubmit}>
            Save {isLoading && <Loader />}
          </BtnSave>
        </FooterModal>
      </BoxAddModal>
    </>
  );
};
