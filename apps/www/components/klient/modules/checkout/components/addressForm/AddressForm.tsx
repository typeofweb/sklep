import React from 'react';
import { Field, Form } from 'react-final-form';

export const AddressForm = ({ onSubmit }) => {
  const regions = [{ value: 'mazowieckie', label: 'mazowieckie' }];

  const fieldStyles = 'border border-gray-300 rounded-sm px-4 py-2';

  return (
    <div className="w-full md:w-2/3 mb-4 px-4">
      <h3 className="text-2xl">Dane adresowe</h3>
      <div className="flex flex-col sm:flex-row py-2">
        <div className="flex flex-col sm:w-1/2 sm:pr-2">
          <label htmlFor="firstName" className="py-2">
            Imię
          </label>
          <Field name="firstName">
            {({ input, meta }) => (
              <div className="flex flex-col">
                <input
                  {...input}
                  component="input"
                  id="firstName"
                  placeholder="Imię"
                  className={fieldStyles}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </div>
        <div className="flex flex-col sm:w-1/2 sm:pl-2">
          <label htmlFor="lastName" className="py-2">
            Nazwisko
          </label>
          <Field name="lastName">
            {({ input, meta }) => (
              <input
                {...input}
                component="input"
                id="lastName"
                placeholder="Nazwisko"
                className={fieldStyles}
              />
            )}
          </Field>
        </div>
      </div>
      <div className="flex flex-col w-full py-2">
        <label htmlFor="companyName" className="py-2">
          Nazwa firmy (opcjonalnie)
        </label>
        <Field name="companyName">
          {({ input, meta }) => (
            <input
              {...input}
              component="input"
              id="companyName"
              placeholder="Nazwa firmy"
              className={fieldStyles}
            />
          )}
        </Field>
      </div>
      <div className="flex flex-col w-full py-2">
        <label htmlFor="region" className="py-2">
          Województwo
        </label>
        <Field
          name="region"
          component="select"
          className="border border-gray-300 rounded-sm px-4 py-2"
        >
          <option value="">Wybierz województwo</option>
          {regions.map((region, index) => (
            <option key={index} className="bg-gray-600" value={region.value}>
              {region.label}
            </option>
          ))}
        </Field>
      </div>
      <div className="flex flex-col w-full py-2">
        <label htmlFor="streetName" className="py-2">
          Nazwa ulicy
        </label>
        <Field name="streetName">
          {({ input, meta }) => (
            <input
              {...input}
              component="input"
              id="streetName"
              placeholder="Nazwa ulicy"
              className={fieldStyles}
            />
          )}
        </Field>
      </div>
      <div className="flex py-2">
        <div className="flex flex-col w-1/2 pr-2">
          <label htmlFor="houseNumber" className="py-2">
            Numer domu
          </label>
          <Field name="houseNumber">
            {({ input, meta }) => (
              <input
                {...input}
                component="input"
                id="houseNumber"
                placeholder="Nr domu"
                className={fieldStyles}
              />
            )}
          </Field>
        </div>
        <div className="flex flex-col w-1/2 pl-2">
          <label htmlFor="apartmentNumber" className="py-2">
            Numer lokalu
          </label>
          <Field name="apartmentNumber">
            {({ input, meta }) => (
              <input
                {...input}
                component="input"
                id="apartmentNumber"
                placeholder="Nr lokalu"
                className={fieldStyles}
              />
            )}
          </Field>
        </div>
      </div>
      <div className="flex flex-col w-full py-2">
        <label htmlFor="city" className="py-2">
          Miasto
        </label>
        <Field name="city">
          {({ input, meta }) => (
            <input
              {...input}
              component="input"
              id="city"
              placeholder="Miasto"
              className={fieldStyles}
            />
          )}
        </Field>
      </div>
      <div className="flex flex-col w-full py-2">
        <label htmlFor="zipCode" className="py-2">
          Kod pocztowy
        </label>
        <Field name="zipCode">
          {({ input, meta }) => (
            <input
              {...input}
              component="input"
              id="zipCode"
              placeholder="Kod pocztowy"
              className={fieldStyles}
            />
          )}
        </Field>
      </div>
      <div className="flex flex-col w-full py-2">
        <label htmlFor="phone" className="py-2">
          Telefon
        </label>
        <Field name="phone">
          {({ input, meta }) => (
            <input
              {...input}
              component="input"
              id="phone"
              placeholder="Telefon"
              className={fieldStyles}
            />
          )}
        </Field>
      </div>
      <div className="flex flex-col w-full py-2">
        <label htmlFor="email" className="py-2">
          Adres email
        </label>
        <Field name="email">
          {({ input, meta }) => (
            <input
              {...input}
              component="input"
              id="email"
              placeholder="Adres email"
              className={fieldStyles}
            />
          )}
        </Field>
      </div>
    </div>
  );
};
