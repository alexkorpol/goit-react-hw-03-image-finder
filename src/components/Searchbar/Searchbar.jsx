import React from 'react';
import {SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, SearchbarHeader } from './Searchbar.styled';

export default function Searchbar() {
  return (
<SearchbarHeader class="searchbar">
  <SearchForm class="form">
    <SearchFormButton type="submit" class="button">
      <SearchFormButtonLabel class="button-label">Search</SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchbarHeader>

  );
}
