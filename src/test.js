<div>

      </div>
      <div className="d-flex pt-4 justify-content-center">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={items.map((item) => (item.name))}
          sx={{ width: 200 }}
          // isOptionEqualToValue={isOptionEqualToValue}

          renderInput={(params) => <TextField {...params} label="Search Product"
            onKeyPress={handleEnterPressed}
            inputRef={inputRef}
          />}
          // value={query}
          onInputChange={(e, value) => setTextinProduct(value)}
          value={textinProduct === "" ? null : textinProduct}
          onChange={handleSelection}

        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={subCateOptions}
          sx={{ width: 200 }}

          renderInput={(params) => <TextField {...params} label="Sub Category"
            inputRef={inputSubRef}
          />}

          onChange={handleSelectionSub}
          value={subCategory === "" ? null : subCategory}

        />
      </div>
      <div>
        <button className={`btn `} onClick={() => {setQuery("");setTextinProduct("");setMainCategory("") }}>Reset</button>
      </div>

      